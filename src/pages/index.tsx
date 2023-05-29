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
      const diff = Math.abs(prevSpPageYRef.current - clientY);

      if (diff < 200) {
        //小幅のスワイプは画面遷移させない
        return;
      }

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
      <PageHead description="Ko Web Creator の Portfolio Site です。" />
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
                <div className={mainStyles.frameWrap}>
                  <NextImage className={mainStyles.frame} src="/mercan.png" />
                </div>
                <NextImage className={mainStyles.img} src="/mac.png" />
              </figure>
              <article id="first_article">
                <h2>オウンドメディア構築</h2>
                <p>
                  <b>使用技術 :</b>
                  <span data-slot="NuxtJS, WordPress, GraphQL" />
                </p>
                <p>
                  <b>説明 :</b>
                  <span data-slot="WordPressをHeadlessにしてGraphQLにてAPIを作成し、ページ生成はNuxtJSのSSGを使用して実装しました" />
                </p>
                <p>
                  <b>URL :</b>
                  <a href="https://mercan.mercari.com/" rel="noreferrer" target="_blank">
                    <span data-slot="https://mercan.mercari.com/" />
                  </a>
                </p>
              </article>
            </section>
            <section className={mainStyles.section} ref={secondSectionRef}>
              <figure>
                <div className={mainStyles.frameWrap}>
                  <NextImage className={mainStyles.frame} src="/yomcoma_web.png" />
                </div>
                <NextImage className={mainStyles.img} src="/mac.png" />
              </figure>
              <article id="second_article">
                <h2>Web開発</h2>
                <p>
                  <b>使用技術 :</b>
                  <span data-slot="NextJS, Firebase(認証周り), NestJS, GCP" />
                </p>
                <p>
                  <b>説明 :</b>
                  <span data-slot="NextJSを使用したWeb画面の開発を行いました、また一部バックエンドの実装と外部API(送金・決済)連携も行いました" />
                </p>
                <p>
                  <b>URL :</b>
                  <a href="https://yomcoma.com/writer/" rel="noreferrer" target="_blank">
                    <span data-slot="https://yomcoma.com/writer/" />
                  </a>
                </p>
              </article>
            </section>
            <section className={mainStyles.section} ref={thirdSectionRef}>
              <figure>
                <div className={mainStyles.frameWrap}>
                  <NextImage className={mainStyles.frame} src="/yomcoma_app.png" />
                </div>
                <NextImage className={mainStyles.img} src="/mac.png" />
              </figure>
              <article id="third_article">
                <h2>アプリ開発</h2>
                <p>
                  <b>使用技術 :</b>
                  <span data-slot="Flutter, Firebase(認証周り)" />
                </p>
                <p>
                  <b>説明 :</b>
                  <span data-slot="Flutterを使用したアプリ開発を行いました、フロントの設計から実装を行いました" />
                </p>
                <p>
                  <b>URL :</b>
                  <a href="https://yomcoma.com/user/" rel="noreferrer" target="_blank">
                    <span data-slot="https://yomcoma.com/user/" />
                  </a>
                </p>
              </article>
            </section>
            <section className={mainStyles.profile} ref={fourSectionRef}>
              <div className={mainStyles.icon}>
                <NextImage className={mainStyles.img} src="/me.jpg" />
              </div>
              <div className={mainStyles.pin} />
              <article>
                <p className="notMove">
                  ポートフォリオをご覧いただきありがとうございます。
                  <br />
                  趣味が仕事になり、今ではWebやアプリ開発など幅広く携わってます。
                  <br />
                  モダン開発を得意としてスピーディーと高品質な画面実装を得意とします。
                  <br />
                  最近では新規サービスの立ち上げにも携わりました。
                  <br />
                  幅広い経験を活かしお客様のニーズに合わせてご提案可能なので、Webやアプリでお困りの事があれば
                  お気軽にお問い合わせ下さい。
                </p>
                <CustomLink href="https://forms.gle/aZ1zFmVpEz9euuXF7">
                  <span>お問い合わせフォームに飛びます</span>
                  <span>お問い合わせ</span>
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
