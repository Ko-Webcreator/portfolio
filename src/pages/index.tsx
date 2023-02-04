import { useCallback, useEffect, useRef } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

import { NextImage } from '@/components/common/NextImage';
import { PageHead } from '@/components/common/PageHead';
import { useScrollController } from '@/hooks/useScrollController';
import { config } from '@/libs/particles';
import headerStyles from '@/styles/header.module.scss';
import mainStyles from '@/styles/main.module.scss';
import rectStyles from '@/styles/rect.module.scss';
import wholeStyles from '@/styles/whole.module.scss';

import type { NextPage } from 'next';
import { CustomLink } from '@/components/common/CustomLink';
// const AnimateCanvas = dynamic(() => import('@/components/AnimateCanvas'), {
//   ssr: false,
// });

const IndexPage: NextPage = () => {
  const prevSpPageYRef = useRef(0);

  const {
    arrow,
    firstSectionRef,
    fourSectionRef,
    header,
    main,
    onFirstController,
    rect,
    secondBlock,
    secondSectionRef,
    section,
    thirdSectionRef,
  } = useScrollController();

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      const deltaY = e.deltaY;
      onFirstController(deltaY);
    });

    window.addEventListener('touchstart', (e) => {
      prevSpPageYRef.current = e.targetTouches[0].clientY;
    });

    window.addEventListener('touchend', (e) => {
      const clientY = e.changedTouches[0].clientY;
      if (prevSpPageYRef.current < clientY) {
        onFirstController(-1);
      } else if (prevSpPageYRef.current > clientY) {
        onFirstController(1);
      }
    });
  }, [prevSpPageYRef, onFirstController]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <PageHead description="福岡に住む Ko Web Creator の Portfolio Site です。" />
      <div className={`${wholeStyles.wrap}`}>
        <div className={wholeStyles.childWrap}>
          <header className={headerStyles.title} ref={header}>
            <h1>
              Ko
              <br />
              Portfolio
            </h1>
          </header>
          <section className={rectStyles.wrap} ref={section}>
            <h2 className={rectStyles.leftFixed} data-text="Portfolio">
              Portfolio
            </h2>
            <Particles className={rectStyles.particles} init={particlesInit} options={config} />
            <div className={rectStyles.fukuoka}>
              <NextImage className={rectStyles.img} src="/fukuoka.png" />
            </div>
            <div className={rectStyles.rect} ref={rect} />
            <div className={rectStyles.arrow} ref={arrow}>
              <div className={rectStyles.arrowInner} />
            </div>
          </section>
          <div className={rectStyles.secondBlocks} ref={secondBlock} />
          <main className={mainStyles.wrap} ref={main}>
            <section className={mainStyles.section} ref={firstSectionRef}>
              <figure>
                <CustomLink href="https://mercan.mercari.com/">
                  <NextImage className={mainStyles.frame} src="/mercan.png" />
                </CustomLink>
                <NextImage className={mainStyles.img} src="/mac.png" />
              </figure>
              <article id="first_article">
                <h2>オウンドメディア構築</h2>
                <p>
                  <b>使用技術 :</b>
                  <span data-slot="NuxtJS, WordPress, GraphQL" />
                </p>
                <p>
                  <b>製作期間 / 人数 :</b>
                  <span data-slot="約4ヶ月 / 1人" />
                </p>
                <p>
                  <b>説明 :</b>
                  <span
                    data-slot="WordPress を Headless にして GraphQL にて API
                を作成しました、ページ生成は NuxtJS の Static Site Generator を使用して実装しています。"
                  />
                </p>
              </article>
            </section>
            <section className={mainStyles.section} ref={secondSectionRef}>
              <figure>
                <CustomLink href="https://yomcoma.com/user/">
                  <NextImage className={mainStyles.frame} src="/yomcoma_app.png" />
                </CustomLink>
                <NextImage className={mainStyles.img} src="/mac.png" />
              </figure>
              <article id="second_article">
                <h2>アプリ開発</h2>
                <p>
                  <b>使用技術 :</b>
                  <span data-slot="Flutter, Firebase(認証周り)" />
                </p>
                <p>
                  <b>開発期間 / 人数 :</b>
                  <span data-slot="約1年 / 3人" />
                </p>
                <p>
                  <b>説明 :</b>
                  <span data-slot="プライベートで Flutter での開発を行ってた所、アプリ開発にアサインされました。フロントの設計から実装までを担当しました。" />
                </p>
              </article>
            </section>
            <section className={mainStyles.section} ref={thirdSectionRef}>
              <figure>
                <CustomLink href="https://yomcoma.com/writer/">
                  <NextImage className={mainStyles.frame} src="/yomcoma_web.png" />
                </CustomLink>
                <NextImage className={mainStyles.img} src="/mac.png" />
              </figure>
              <article id="third_article">
                <h2>Web開発</h2>
                <p>
                  <b>使用技術 :</b>
                  <span data-slot="NextJS, Firebase(認証周り), NestJS, MySQL, GCP" />
                </p>
                <p>
                  <b>開発期間 / 人数 :</b>
                  <span data-slot="約8ヶ月 / 3人" />
                </p>
                <p>
                  <b>説明 :</b>
                  <span data-slot="アプリ開発後は Web の管理画面開発を行いました。NextJS を使用して実装してます。またバックエンドの実装も行いました。バックエンドは NestJS と MySQL でインフラ周りは GCP を使用しています。" />
                </p>
              </article>
            </section>
            <section className={mainStyles.profile} ref={fourSectionRef}>
              <div className={mainStyles.icon}>
                <NextImage className={mainStyles.img} src="/pic.png" />
              </div>
              <div className={mainStyles.pin} />
              <article>
                <p className="notMove">
                  ポートフォリオを見ていただきありがとうございます。
                  <br />
                  趣味で行ってたWeb制作を仕事で行いたく20代後半に上京しコーダーとして約7年間従事してきました。
                  <br />
                  そしてFlutterを使用したアプリ開発を趣味で行ってた所、今いる会社にて制作からアプリ開発にアサインされました。
                  <br />
                  そのあとこちらも独学で学んでた React を使用した開発にもアサインされ
                  Web開発も行いました。
                  <br />
                  また直近は NestJS を使用したバックエンド実装にも携わりました。
                  <br />
                  そうした中で今回地元に帰省するので転職活動を行うことになりました。
                  <br />
                  今まで学んできた事をアウトプットしつつ、今後はより開発を追求したいと思ってます。
                  <br />
                  ご検討よろしくお願いします。
                </p>
                <CustomLink href="https://github.com/Ko-Webcreator/portfolio">
                  <span>Source code is here ❤</span>
                  <span>Thanks for watching My portfolio！</span>
                </CustomLink>
              </article>
            </section>
          </main>
          <p className={mainStyles.copyright} data-text="2023 Ko Portfolio">
            &copy; 2023 Ko Portfolio
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
