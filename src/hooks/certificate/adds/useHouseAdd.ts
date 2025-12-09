import useCertificatePost from "../useCertificatePost";

export const useHouseAdd = <House>() =>
  useCertificatePost<House>("house/", ["house"]);
