import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { z } from 'zod';
import { siteConfig } from '../../config/site';
import { content } from '../../data/content';
import { materialCategories } from '../../data/materials';
import { services } from '../../data/services';

const quoteSchema = z.object({
  name: z.string().trim().min(2, content.contact.validation.name),
  phone: z
    .string()
    .trim()
    .min(7, content.contact.validation.phone)
    .max(30, content.contact.validation.phoneTooLong),
  email: z.union([z.string().trim().email(content.contact.validation.email), z.literal('')]),
  need: z.string().min(1, content.contact.validation.need),
  location: z.string().trim().min(2, content.contact.validation.location),
  message: z
    .string()
    .trim()
    .min(10, content.contact.validation.message)
    .max(3000, content.contact.validation.messageTooLong),
  _gotcha: z.string().max(0, content.contact.validation.spam),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;
type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'config-error';

export function QuoteForm() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<FormStatus>('idle');

  const preselectedNeed = useMemo(() => {
    const materialSlug = searchParams.get('material');
    const serviceSlug = searchParams.get('service');
    const material = materialCategories.find((item) => item.slug === materialSlug);
    if (material) return `material:${material.slug}`;
    const service = services.find((item) => item.slug === serviceSlug);
    if (service) return `service:${service.slug}`;
    return '';
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      need: preselectedNeed,
      location: '',
      message: '',
      _gotcha: '',
    },
  });

  useEffect(() => {
    setValue('need', preselectedNeed);
  }, [preselectedNeed, setValue]);

  const submit = async (values: QuoteFormValues) => {
    if (!siteConfig.formEndpoint) {
      setStatus('config-error');
      return;
    }

    setStatus('submitting');

    const selectedService = services.find((service) => `service:${service.slug}` === values.need);
    const selectedMaterial = materialCategories.find(
      (material) => `material:${material.slug}` === values.need,
    );
    const needLabel = selectedService?.title ?? selectedMaterial?.title ?? values.need;

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email,
          need: needLabel,
          location: values.location,
          message: values.message,
          _subject: `Website quote request: ${needLabel}`,
          _gotcha: values._gotcha,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      reset({
        name: '',
        phone: '',
        email: '',
        need: preselectedNeed,
        location: '',
        message: '',
        _gotcha: '',
      });
    } catch {
      setStatus('error');
    }
  };

  const fieldClass =
    'mt-2 min-h-12 w-full rounded-md border border-lightgrey bg-white px-3 py-2 text-ink shadow-sm placeholder:text-slate/70 focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20';

  return (
    <form
      className="rounded-lg border border-lightgrey bg-white p-5 shadow-card sm:p-7"
      onSubmit={(event) => {
        void handleSubmit(submit)(event);
      }}
      noValidate
    >
      <h2 className="text-3xl font-bold">{content.contact.formTitle}</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          {content.contact.fields.name}
          <input
            id="quote-name"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'quote-name-error' : undefined}
            {...register('name')}
          />
          {errors.name ? (
            <span id="quote-name-error" className="mt-1 block text-sm text-maroon">
              {errors.name.message}
            </span>
          ) : null}
        </label>

        <label className="block text-sm font-semibold text-ink">
          {content.contact.fields.phone}
          <input
            id="quote-phone"
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'quote-phone-error' : undefined}
            {...register('phone')}
          />
          {errors.phone ? (
            <span id="quote-phone-error" className="mt-1 block text-sm text-maroon">
              {errors.phone.message}
            </span>
          ) : null}
        </label>

        <label className="block text-sm font-semibold text-ink">
          {content.contact.fields.email}
          <input
            id="quote-email"
            autoComplete="email"
            type="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'quote-email-error' : undefined}
            {...register('email')}
          />
          {errors.email ? (
            <span id="quote-email-error" className="mt-1 block text-sm text-maroon">
              {errors.email.message}
            </span>
          ) : null}
        </label>

        <label className="block text-sm font-semibold text-ink">
          {content.contact.fields.need}
          <select
            id="quote-need"
            className={fieldClass}
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? 'quote-need-error' : undefined}
            {...register('need')}
          >
            <option value="">{content.contact.fields.needPlaceholder}</option>
            <optgroup label={content.common.servicesGroup}>
              {services.map((service) => (
                <option key={service.slug} value={`service:${service.slug}`}>
                  {service.title}
                </option>
              ))}
            </optgroup>
            <optgroup label={content.common.materialsGroup}>
              {materialCategories.map((category) => (
                <option key={category.slug} value={`material:${category.slug}`}>
                  {category.title}
                </option>
              ))}
            </optgroup>
          </select>
          {errors.need ? (
            <span id="quote-need-error" className="mt-1 block text-sm text-maroon">
              {errors.need.message}
            </span>
          ) : null}
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-ink">
        {content.contact.fields.location}
        <input
          id="quote-location"
          autoComplete="street-address"
          className={fieldClass}
          aria-invalid={Boolean(errors.location)}
          aria-describedby={errors.location ? 'quote-location-error' : undefined}
          {...register('location')}
        />
        {errors.location ? (
          <span id="quote-location-error" className="mt-1 block text-sm text-maroon">
            {errors.location.message}
          </span>
        ) : null}
      </label>

      <label className="mt-5 block text-sm font-semibold text-ink">
        {content.contact.fields.message}
        <textarea
          id="quote-message"
          rows={6}
          className={`${fieldClass} min-h-36 resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'quote-message-error' : undefined}
          placeholder={content.contact.fields.messagePlaceholder}
          {...register('message')}
        />
        {errors.message ? (
          <span id="quote-message-error" className="mt-1 block text-sm text-maroon">
            {errors.message.message}
          </span>
        ) : null}
      </label>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          {content.common.companyWebsite}
          <input tabIndex={-1} autoComplete="off" {...register('_gotcha')} />
        </label>
      </div>

      {status === 'success' ? (
        <div
          className="mt-5 flex gap-3 rounded-md border border-green-700 bg-green-50 p-4 text-sm text-green-900"
          role="status"
        >
          <CheckCircle2 className="shrink-0" aria-hidden="true" size={20} />
          <span>
            <strong>{content.contact.successTitle}.</strong> {content.contact.successBody}
          </span>
        </div>
      ) : null}

      {status === 'config-error' ? (
        <div
          className="mt-5 flex gap-3 rounded-md border border-maroon bg-red-50 p-4 text-sm text-maroon"
          role="alert"
        >
          <AlertCircle className="shrink-0" aria-hidden="true" size={20} />
          <span>{content.contact.configError}</span>
        </div>
      ) : null}

      {status === 'error' ? (
        <div
          className="mt-5 flex gap-3 rounded-md border border-maroon bg-red-50 p-4 text-sm text-maroon"
          role="alert"
        >
          <AlertCircle className="shrink-0" aria-hidden="true" size={20} />
          <span>
            <strong>{content.contact.errorTitle}.</strong> {content.contact.errorBody}
          </span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-maroon bg-maroon px-5 py-3 font-bold text-white transition-colors hover:bg-maroon/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'submitting' ? content.contact.submittingLabel : content.contact.submitLabel}
      </button>
    </form>
  );
}
