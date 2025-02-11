export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skSxyh23W2MqxzgfYnu72TeVU94GXAmAzCvieorXAmh9MIkHGz5Uwub2fDcTk3cRNstTJVpiDTIqN5tmkiMEPK7a663vWtiswyyhIMqgN4NGMhXPIqDrpr47bsqZ0BpLl5qHoUaARIlR3n3EWYUZqwH32fbczf3hWZsvmBfrgcqgUP7TkcHj",
  'Missing environment variable: SANITY_AUTH_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
