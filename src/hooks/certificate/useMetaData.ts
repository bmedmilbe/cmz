import type { Building } from "./useBuildings";

import useCertificateGetSimple from "./useCertificateGetSimple";
import type { Change } from "./useChanges";
import type { County } from "./useCounties";
import type { Country } from "./useCountries";
import type { Coval } from "./useCovals";
import type { IdType } from "./useIdTypes";
import type { Ifen } from "./useIfens";
import type { Instituition } from "./useInstituitions";
import type { Street } from "./useStreets";
import type { CertificateTitle } from "./useTitles";
import type { Town } from "./useTowns";
import type { Universitie } from "./useUniversities";

export interface MetaData {
  countries:Country[],
  idtypes:IdType[],
  intituitions:Instituition[],
  streets:Street[],
  towns:Town[],
  countys:County[],
  titles:CertificateTitle[],
  universities: Universitie[],
  buildings: Building[],
  ifens: Ifen[],
  changes: Change[],
  cemiterios: CertificateTitle[],
  covals: Coval[],
  certificateTitles:CertificateTitle[]

}

const useMetaData = () => useCertificateGetSimple<MetaData>("metadata", "metadata");

export default useMetaData;
