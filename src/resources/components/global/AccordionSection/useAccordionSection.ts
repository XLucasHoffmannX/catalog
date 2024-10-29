import { useState } from 'react';

export function useAccordionSection() {
  const [visibleContent, setVisibleContent] = useState(true);

  return {
    visibleContent,
    onChangeVisibleContent: setVisibleContent
  };
}
