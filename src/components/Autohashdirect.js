import { useEffect } from "react";

export function AutoHashRedirect() {
  useEffect(() => {
    const { pathname, hash } = window.location;

    // Jeśli hash już istnieje – nie rób nic
    if (hash && hash !== "#") return;

    // Dozwolona, jedyna poprawna ścieżka
    const allowedPath = "Portfolio_Milosz";

    // JEŻELI poprawna strona startowa → nic nie robimy
    if (pathname === allowedPath) {
      return;
    }

    // ROOT lub literówka → DODAJ HASH
    window.location.replace(`/#${pathname}`);
  }, []);

  return null;
}


