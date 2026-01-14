import useCertificatePost from "../../useCertificatePost";
import useCertificatePut from "../../useCertificatePut";

export const useCountryAdd = <Country>(id?: number) =>
  id
    ? useCertificatePut<Country>(`countries/${id}`, ["countries"])
    : useCertificatePost<Country>(`countries`, ["countries"]);
