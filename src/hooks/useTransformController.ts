import { MutableRefObject, useCallback } from 'react';

import { sleep } from '@/libs/await/sleep';
import mainStyles from '@/styles/main.module.scss';
import rectStyles from '@/styles/rect.module.scss';

export const useTransformController = () => {
  const onMainExpandTransform = useCallback(
    (main: MutableRefObject<HTMLElement>, section: HTMLElement) => {
      main.current.classList.add(mainStyles.expand);
      section.classList.add(mainStyles.expand);
    },
    [],
  );

  const onMainShrinkTransform = useCallback(
    (main: MutableRefObject<HTMLElement>, section: HTMLElement) => {
      main.current.classList.remove(mainStyles.expand);
      section.classList.remove(mainStyles.expand);
    },
    [],
  );

  const onMainProfileTransform = useCallback(
    async (main: MutableRefObject<HTMLElement>, section: HTMLElement, arrow: HTMLDivElement) => {
      main.current.classList.add(mainStyles.profile);
      arrow.classList.add(rectStyles.up);

      await sleep(1000);

      section.classList.add(mainStyles.expand);
    },
    [],
  );

  const onMainRemoveProfileTransform = useCallback(
    async (main: MutableRefObject<HTMLElement>, section: HTMLElement, arrow: HTMLDivElement) => {
      main.current.classList.remove(mainStyles.profile);
      section.classList.remove(mainStyles.expand);
      arrow.classList.remove(rectStyles.up);
    },
    [],
  );

  const onRectExpandTransform = useCallback((rect: MutableRefObject<HTMLElement>) => {
    rect.current.classList.remove(rectStyles.shrink);
    rect.current.classList.add(rectStyles.expand);
  }, []);

  const onRectFirstShrinkTransform = useCallback((rect: MutableRefObject<HTMLElement>) => {
    rect.current.classList.add(rectStyles.firstShrink);
    rect.current.classList.remove(rectStyles.expand);
  }, []);

  const onRectRemoveShrinkTransform = useCallback((rect: MutableRefObject<HTMLElement>) => {
    rect.current.classList.remove(rectStyles.firstShrink);
  }, []);

  const onRectShrinkTransform = useCallback((rect: MutableRefObject<HTMLElement>) => {
    rect.current.classList.add(rectStyles.shrink);
    rect.current.classList.remove(rectStyles.expand);
  }, []);

  const onRectProfileTransform = useCallback((rect: MutableRefObject<HTMLElement>) => {
    rect.current.classList.add(rectStyles.profile);
    rect.current.classList.remove(rectStyles.shrink);
  }, []);

  const onRectRemoveProfileTransform = useCallback((rect: MutableRefObject<HTMLElement>) => {
    rect.current.classList.add(rectStyles.shrink);
    rect.current.classList.remove(rectStyles.profile);
  }, []);

  const onRectLastTransform = useCallback((rect: MutableRefObject<HTMLElement>) => {
    rect.current.style.bottom = '0';
    rect.current.style.width = '0';
    rect.current.style.height = '0';
    rect.current.style.opacity = '0';
  }, []);

  const onRectRemoveLastTransform = useCallback((rect: MutableRefObject<HTMLElement>) => {
    rect.current.style.bottom = '';
    rect.current.style.width = '';
    rect.current.style.height = '';
    rect.current.style.opacity = '';
  }, []);

  return {
    onMainExpandTransform,
    onMainProfileTransform,
    onMainRemoveProfileTransform,
    onMainShrinkTransform,
    onRectExpandTransform,
    onRectFirstShrinkTransform,
    onRectLastTransform,
    onRectProfileTransform,
    onRectRemoveLastTransform,
    onRectRemoveProfileTransform,
    onRectRemoveShrinkTransform,
    onRectShrinkTransform,
  };
};
