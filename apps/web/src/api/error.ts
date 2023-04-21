type PodcasterErrorAPI = {
  code: string;
  message?: string;
};

export class PodcasterError extends Error {
  public status?: number;
  public key: string;

  constructor(error: PodcasterErrorAPI, status: number) {
    super(error.message || "Something went wrong");
    this.key = error.code || "generic-api-error";
    this.status = status;
  }
}
