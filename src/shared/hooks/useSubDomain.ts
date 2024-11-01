import { useEffect, useState } from 'react';

export function useSubdomain() {
  const [subdomain, setSubdomain] = useState('');

  useEffect(() => {
    const hostname = window.location.hostname;
    const extractedSubdomain = hostname.split('.')[0];
    setSubdomain(extractedSubdomain);
  }, []);

  return subdomain;
}
