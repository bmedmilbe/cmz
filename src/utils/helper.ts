export const setFriendlyError = (error: any) => {
  if (typeof error.response?.data === "object") {
    for (let x in error.response?.data) {
      if (x == "slug") {
        return `${error.response.data[x]}`;
      } else if (Array.isArray(error.response.data[x])) {
        return `${x}: ${error.response.data[x][0]}`;
      }
      return `${x}: ${error.response.data[x]}`;
    }
  }
  return "Algo está errado. Tente mais tarde!";
};

export const chooseOrderTextForFilterCertificate = (choosed: number) => {
  if (Math.abs(choosed) == 1) {
    return `${choosed > 0 ? "" : "-"}main_person__name`;
  } else if (Math.abs(choosed) == 2) {
    return `${choosed > 0 ? "" : "-"}main_person__birth_date`;
  } else if (Math.abs(choosed) == 3) {
    return `${choosed > 0 ? "" : "-"}number`;
  } else if (Math.abs(choosed) == 4) {
    return `${choosed > 0 ? "" : "-"}date_issue`;
  } else if (Math.abs(choosed) == 5) {
    return `${choosed > 0 ? "" : "-"}main_person__id_number`;
  }
  return "";
};

export const chooseOrderTextForPersonFilter = (choosed: number) => {
  if (Math.abs(choosed) == 1) {
    return `${choosed > 0 ? "" : "-"}name`;
  } else if (Math.abs(choosed) == 2) {
    return `${choosed > 0 ? "" : "-"}birth_date`;
  } else if (Math.abs(choosed) == 4) {
    return `${choosed > 0 ? "" : "-"}id_issue_date`;
  } else if (Math.abs(choosed) == 5) {
    return `${choosed > 0 ? "" : "-"}id_number`;
  }
  return "";
};
