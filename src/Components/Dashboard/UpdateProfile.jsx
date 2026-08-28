import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import toast from 'react-hot-toast'
import { ArrowLeft, Camera, Check, Loader2, Plus, Sparkles, X } from 'lucide-react'
import { AuthContext } from '../../Context/AuthProvider'
import { useTheme } from '../../Context/ThemeProvider'
import useAxiosSecure from '../../Hooks/useAxiosSecure'

const EXPERIENCE_LEVELS = [
  { value: 'entry', label: 'Entry Level' },
  { value: 'junior', label: 'Junior' },
  { value: 'mid', label: 'Mid Level' },
  { value: 'senior', label: 'Senior' },
  { value: 'lead', label: 'Lead' },
  { value: 'executive', label: 'Executive' },
]

const UpdateProfile = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const { isDark } = useTheme()
  const prefersReduced = useReducedMotion()
  const acc = isDark ? '#34d399' : '#059669'

  const [currentProfile, setCurrentProfile] = useState(null)
  const [loadingProfile, setLoadingProfile] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [photoError, setPhotoError] = useState(false)
  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState('')
  const [extracting, setExtracting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', experience_level: '', photoURL: '' },
  })

  const watchedPhotoURL = watch('photoURL')

  useEffect(() => {
    setPhotoError(false)
  }, [watchedPhotoURL])

  useEffect(() => {
    if (!user?.email) return

    axiosSecure
      .get(`/api/users/me/${user.email}`)
      .then((res) => {
        if (res.data.success) {
          const profile = res.data.data
          setCurrentProfile(profile)
          setValue('name', profile.name || '')
          setValue('experience_level', profile.experience_level || '')
          setValue('photoURL', profile.photoURL || '')
          setSkills(profile.skills || [])
        }
      })
      .catch(() => toast.error('Failed to load profile'))
      .finally(() => setLoadingProfile(false))
  }, [user?.email, axiosSecure, setValue])

  const handleExtractFromCV = async () => {
    if (!user?.email) return
    setExtracting(true)

    try {
      const res = await axiosSecure.get('/api/cv')
      const cvs = res.data?.data || []

      if (cvs.length === 0) {
        toast.error('No CV found. Upload a CV first')
        return
      }

      const latest = cvs[0]
      const skillRes = await axiosSecure.post(`/api/cv/${latest.id}/skills`)

      if (skillRes.data.success) {
        const extracted = skillRes.data.data.skills || []
        setSkills((prev) => {
          const seen = new Set(prev.map((s) => s.toLowerCase()))
          const merged = [...prev]
          for (const skill of extracted) {
            const trimmed = skill.trim()
            if (!trimmed || seen.has(trimmed.toLowerCase())) continue
            seen.add(trimmed.toLowerCase())
            merged.push(trimmed)
          }
          return merged
        })
        toast.success(`Extracted ${extracted.length} skills from your CV`)
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to extract skills')
    } finally {
      setExtracting(false)
    }
  }

  const addSkill = () => {
    const trimmed = newSkill.trim()
    if (!trimmed) return
    setSkills((prev) => {
      if (prev.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
        toast.error('Skill already added')
        return prev
      }
      return [...prev, trimmed]
    })
    setNewSkill('')
  }
  

  const removeSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter((s) => s !== skillToRemove))
  }

  const onSubmit = async (data) => {
    if (!user?.email) return
    setSubmitting(true)

    try {
      const payload = {}
      if (data.name !== currentProfile?.name) payload.name = data.name
      if (data.experience_level !== currentProfile?.experience_level) payload.experience_level = data.experience_level
      if (data.photoURL !== currentProfile?.photoURL) payload.photoURL = data.photoURL
      if (JSON.stringify(skills) !== JSON.stringify(currentProfile?.skills || [])) payload.skills = skills

      if (Object.keys(payload).length === 0) {
        toast.error('No changes to save')
        setSubmitting(false)
        return
      }

      const res = await axiosSecure.patch(`/api/users/update/${user.email}`, payload)

      if (res.data.success) {
        toast.success('Profile updated successfully')
        navigate('/dashboard/profile')
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to update profile')
    } finally {
      setSubmitting(false)
    }
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 sm:py-20 text-center">
        <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-base-300 text-base-content/30">
          <Camera className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <h2 className="font-display mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-base-content">
          Sign in to forge your profile
        </h2>
        <p className="mt-2 text-sm text-base-content/50 px-2">Update your career identity after signing in.</p>
      </div>
    )
  }

  if (loadingProfile) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary animate-spin" />
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-2 sm:py-6 lg:py-8">
      <motion.div
        initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
      >
        {/* Breadcrumb + back — 44px hit target */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2 font-data text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-base-content/40">
          <span className="hidden sm:inline">CareerForge</span>
          <span className="hidden sm:inline text-base-content/25">/</span>
          <span style={{ color: acc }}>Edit Profile</span>
        </div>
        <button
          onClick={() => navigate('/dashboard/profile')}
          className="inline-flex items-center gap-2 -ml-2 sm:ml-0 px-2 sm:px-0 py-2.5 min-h-11 text-sm text-base-content/60 hover:text-base-content transition-colors mb-4 sm:mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>Back to Profile</span>
        </button>

        {/* Forge card — signature seam language */}
        <div className="relative overflow-hidden bg-base-300 rounded-2xl sm:rounded-3xl border border-base-content/10 p-5 sm:p-6 lg:p-8">
          {/* subtle ember glow — clipped, no scroll */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 sm:h-44 sm:w-44 rounded-full blur-3xl opacity-60"
            style={{
              background: isDark
                ? 'radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)'
                : 'radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)',
            }}
          />
          {/* corner forge brackets — desktop only */}
          <div aria-hidden className="hidden sm:block pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-emerald-500/20 rounded-tl-2xl lg:rounded-tl-3xl" />
          <div aria-hidden className="hidden sm:block pointer-events-none absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-emerald-500/20 rounded-tr-2xl lg:rounded-tr-3xl" />

        <div className="relative flex flex-col items-center mb-6 sm:mb-8 text-center">
          {/* Medallion — responsive: 96px mobile → 128px tablet → 144px desktop */}
          <div className="relative">
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full p-px sm:p-0.75"
              style={{
                background: `linear-gradient(135deg, ${acc}, transparent 62%)`,
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-base-200 ring-1 ring-emerald-500/10">
                {watchedPhotoURL && !photoError ? (
                  <img
                    src={watchedPhotoURL}
                    alt="Profile preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-base-content/30">
                    <Camera className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  </div>
                )}
              </div>
            </div>
            {/* status dot */}
            <span
              aria-hidden
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border-2"
              style={{
                background: acc,
                borderColor: isDark ? '#0B0F1A' : '#F8FAFC',
                boxShadow: `0 0 0 2px ${isDark ? '#1f2937' : '#e5e7eb'}`,
              }}
            />
          </div>
            <h1 className="font-display mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">Update Profile</h1>
            <p className="text-xs sm:text-sm text-base-content/55 mt-1.5 max-w-[28ch] sm:max-w-none leading-relaxed">Recast your career identity — all fields are editable</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5 sm:space-y-6">
            <div>
              <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="h-px flex-1 bg-base-content/10" />
                <span className="inline-flex items-center gap-1.5 font-data text-[10px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-widest text-emerald-600 dark:text-emerald-400 uppercase whitespace-nowrap">
                  <span className="h-1 w-1 rounded-full hidden sm:block" style={{ background: acc }} />
                  Identity
                </span>
                <span className="h-px flex-1 bg-base-content/10" />
              </div>
            </div>

              <div>
                <label htmlFor="update-name" className="block font-data text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] text-base-content/60 mb-1.5 sm:mb-2">
                  Full Name
                </label>
                <input
                  id="update-name"
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  autoComplete="name"
                  placeholder={currentProfile?.name || 'Enter your full name'}
                  className="w-full min-h-11 px-4 py-3 sm:py-2.5 rounded-xl border border-base-content/15 bg-base-200 text-[16px] sm:text-[15px] text-base-content placeholder:text-base-content/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {errors.name && (
                  <p className="text-xs text-error mt-1.5">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="h-px flex-1 bg-base-content/10" />
                <span className="inline-flex items-center gap-1.5 font-data text-[10px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-widest text-emerald-600 dark:text-emerald-400 uppercase whitespace-nowrap">
                  <span className="h-1 w-1 rounded-full hidden sm:block" style={{ background: acc }} />
                  Career
                </span>
                <span className="h-px flex-1 bg-base-content/10" />
              </div>

              <div>
                <label htmlFor="update-exp" className="block font-data text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] text-base-content/60 mb-1.5 sm:mb-2">
                  Experience Level
                </label>
                <select
                  id="update-exp"
                  {...register('experience_level')}
                  className="w-full min-h-11 px-4 py-3 sm:py-2.5 rounded-xl border border-base-content/15 bg-base-200 text-[16px] sm:text-[15px] text-base-content focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="">Select level</option>
                  {EXPERIENCE_LEVELS.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="h-px flex-1 bg-base-content/10" />
                <span className="inline-flex items-center gap-1.5 font-data text-[10px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-widest text-emerald-600 dark:text-emerald-400 uppercase whitespace-nowrap">
                  <span className="h-1 w-1 rounded-full hidden sm:block" style={{ background: acc }} />
                  Media
                </span>
                <span className="h-px flex-1 bg-base-content/10" />
              </div>

              <div>
                <label htmlFor="update-photo" className="block font-data text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] text-base-content/60 mb-1.5 sm:mb-2">
                  Photo URL
                </label>
                <input
                  id="update-photo"
                  {...register('photoURL')}
                  type="url"
                  inputMode="url"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full min-h-11 px-4 py-3 sm:py-2.5 rounded-xl border border-base-content/15 bg-base-200 text-[16px] sm:text-[15px] text-base-content placeholder:text-base-content/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <p className="text-[11px] sm:text-xs text-base-content/40 mt-1.5 leading-relaxed">
                  Paste a direct link to your professional headshot
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="h-px flex-1 bg-base-content/10" />
                <span className="inline-flex items-center gap-1.5 font-data text-[10px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-widest text-emerald-600 dark:text-emerald-400 uppercase whitespace-nowrap">
                  <span className="h-1 w-1 rounded-full hidden sm:block" style={{ background: acc }} />
                  Skills
                </span>
                <span className="h-px flex-1 bg-base-content/10" />
              </div>

              <button
                type="button"
                onClick={handleExtractFromCV}
                disabled={extracting}
                className="mb-3 w-full min-h-11 py-3 sm:py-2.5 px-4 rounded-xl border border-primary/30 bg-primary/10 text-primary font-medium text-[14px] sm:text-sm hover:bg-primary/15 active:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-300"
              >
                {extracting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                    <span>Extracting from CV…</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Extract from CV</span>
                  </>
                )}
              </button>

              <p className="text-[11px] sm:text-xs text-base-content/40 mb-3 leading-relaxed">
                AI reads your latest CV and merges any new skills — your existing skills are kept.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 min-w-0">
                {skills.length > 0 ? (
                  skills.map((skill) => (
                    <span key={skill} className="inline-flex items-center gap-1 sm:gap-1.5 max-w-full rounded-full border border-primary/15 bg-primary/10 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-primary">
                      <span className="truncate min-w-0 max-w-[14ch] sm:max-w-none">{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="shrink-0 -mr-1 ml-0.5 p-1.5 sm:p-1 rounded-full hover:bg-primary/15 hover:text-error active:bg-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Remove ${skill}`}
                      >
                        <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-base-content/40 py-1">No skills added yet.</p>
                )}
              </div>

              <div className="flex gap-2 sm:gap-2.5">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addSkill()
                    }
                  }}
                  placeholder="Add a skill"
                  aria-label="Add a skill"
                  className="flex-1 min-w-0 min-h-11 px-4 py-3 sm:py-2.5 rounded-xl border border-base-content/15 bg-base-200 text-[16px] sm:text-[15px] text-base-content placeholder:text-base-content/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button
                  type="button"
                  onClick={addSkill}
                  className="shrink-0 min-h-11 px-4 sm:px-5 py-3 sm:py-2.5 rounded-xl bg-primary/10 text-primary font-medium text-sm hover:bg-primary/15 active:bg-primary/20 transition-colors flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-300"
                  aria-label="Add skill"
                >
                  <Plus className="w-4 h-4 shrink-0" />
                  <span className="hidden xs:inline sm:inline">Add</span>
                </button>
              </div>
              <p className="sm:hidden text-[11px] text-base-content/30 mt-1.5">Tap Add or press Enter</p>
            </div>

            <div className="pt-3 sm:pt-2">
              <motion.button type="submit"
              disabled={submitting}
              className="w-full min-h-12 sm:min-h-11 py-3.5 sm:py-3 px-6 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold text-[15px] sm:text-sm hover:from-emerald-600 hover:to-teal-600 active:from-emerald-700 active:to-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-base-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/15"
              whileHover={prefersReduced ? {} : { scale: 1.005 }}
              whileTap={{ scale: 0.99 }}
            >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                    <span>Saving…</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Save Changes</span>
                  </>
                )}
              </motion.button>
              <p className="text-center font-data text-[10px] tracking-wide text-base-content/30 mt-3">
                Changes apply to your public profile
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default UpdateProfile
