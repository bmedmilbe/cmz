const scroll = (refs) => {
  if (typeof window !== "undefined") {
    const hash = window?.location?.hash;
    if (hash && document.getElementById(hash?.replace("#", ""))) {
      document.getElementById(hash.replace("#", ""))?.scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(function () {
        window.scrollTo(window.scrollX, window.scrollY - 90);
      }, 1000); // 1000 milliseconds = 1 second
    }
  }
};

export { scroll };
