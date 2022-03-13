/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import styles from './footer.styles.module.scss';
// Icons
import {BsGithub, BsTwitter} from 'react-icons/bs';
import {SiDiscord} from 'react-icons/si';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
// import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import IconExternalLink from '@theme/IconExternalLink';
import {v4 as uuidv4} from 'uuid';

// function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
//   const toUrl = useBaseUrl(to);
//   const normalizedHref = useBaseUrl(href, {
//     forcePrependBaseUrl: true,
//   });
//   return (
//     <Link
//       className="footer__link-item"
//       {...(href
//         ? {
//             href: prependBaseUrlToHref ? normalizedHref : href,
//           }
//         : {
//             to: toUrl,
//           })}
//       {...props}>
//       {href && !isInternalUrl(href) ? (
//         <span>
//           {label}
//           <IconExternalLink />
//         </span>
//       ) : (
//         label
//       )}
//     </Link>
//   );
// }
//
// function FooterLogo({sources, alt, width, height}) {
//   return (
//     <ThemedImage
//       className="footer__logo"
//       alt={alt}
//       sources={sources}
//       width={width}
//       height={height}
//     />
//   );
// }
//
// function MultiColumnLinks({links}) {
//   return (
//     <>
//       {links.map((linkItem, i) => (
//         <div key={i} className="col footer__col">
//           <div className="footer__title">{linkItem.title}</div>
//           <ul className="footer__items">
//             {linkItem.items.map((item, key) =>
//               item.html ? (
//                 <li
//                   key={key}
//                   className="footer__item" // Developer provided the HTML, so assume it's safe.
//                   // eslint-disable-next-line react/no-danger
//                   dangerouslySetInnerHTML={{
//                     __html: item.html,
//                   }}
//                 />
//               ) : (
//                 <li key={item.href || item.to} className="footer__item">
//                   <FooterLink {...item} />
//                 </li>
//               ),
//             )}
//           </ul>
//         </div>
//       ))}
//     </>
//   );
// }
//
// function SimpleLinks({links}) {
//   return (
//     <div className="footer__links">
//       {links.map((item, key) => (
//         <React.Fragment key={key}>
//           {item.html ? (
//             <span
//               className="footer__link-item" // Developer provided the HTML, so assume it's safe.
//               // eslint-disable-next-line react/no-danger
//               dangerouslySetInnerHTML={{
//                 __html: item.html,
//               }}
//             />
//           ) : (
//             <FooterLink {...item} />
//           )}
//           {links.length !== key + 1 && (
//             <span className="footer__link-separator">·</span>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
//
// function isMultiColumnFooterLinks(links) {
//   return 'title' in links[0];
// }
//
// function Footer() {
//   const {footer} = useThemeConfig();
//   const {copyright, links = [], logo = {}} = footer || {};
//   const sources = {
//     light: useBaseUrl(logo.src),
//     dark: useBaseUrl(logo.srcDark || logo.src),
//   };
//
//   if (!footer) {
//     return null;
//   }
//
//   return (
//     <footer
//       className={clsx('footer', {
//         'footer--dark': footer.style === 'dark',
//       })}>
//       <div className="container container-fluid">
//         {links &&
//           links.length > 0 &&
//           (isMultiColumnFooterLinks(links) ? (
//             <div className="row footer__links">
//               <MultiColumnLinks links={links} />
//             </div>
//           ) : (
//             <div className="footer__links text--center">
//               <SimpleLinks links={links} />
//             </div>
//           ))}
//         {(logo || copyright) && (
//           <div className="footer__bottom text--center">
//             {logo && (logo.src || logo.srcDark) && (
//               <div className="margin-bottom--sm">
//                 {logo.href ? (
//                   <Link href={logo.href} className={styles.footerLogoLink}>
//                     <FooterLogo
//                       alt={logo.alt}
//                       sources={sources}
//                       width={logo.width}
//                       height={logo.height}
//                     />
//                   </Link>
//                 ) : (
//                   <FooterLogo
//                     alt={logo.alt}
//                     sources={sources}
//                     width={logo.width}
//                     height={logo.height}
//                   />
//                 )}
//               </div>
//             )}
//             {copyright ? (
//               <div
//                 className="footer__copyright" // Developer provided the HTML, so assume it's safe.
//                 // eslint-disable-next-line react/no-danger
//                 dangerouslySetInnerHTML={{
//                   __html: copyright,
//                 }}
//               />
//             ) : null}
//           </div>
//         )}
//       </div>
//     </footer>
//   );
// }
//
// export default React.memo(Footer);


const FooterCol = ({heading = 'need heading', links}) => {

    return (
        <div className={styles.containerCol}>
            <h3 className={styles.heading}>{heading}</h3>
            <ul>
                {
                    links.map((item) => (
                        <li key={uuidv4()}>
                            {
                                item.type === 'Link'
                                    ? <Link to={item.path}> {item.title} </Link>
                                    : <a href={item.path} target={'_blank'} rel={'noreferrer'}> {item.title} </a>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const linksCol3 = [
    {
        type: 'a',
        title: 'Back to morenft',
        path: 'https://www.morenft.net/'
    },
    {
        type: 'Link',
        title: 'FAQs',
        path: 'https://www.morenft.net/'
    },
    {
        type: 'Link',
        title: 'Contact us',
        path: 'https://www.morenft.net/'
    },
    {
        type: 'Link',
        title: 'Become a creator',
        path: 'https://www.morenft.net/'
    },
]

const linksCol4 = [
    {
        type: 'Link',
        title: 'Terms of service',
        path: 'https://www.morenft.net/'
    },
    {
        type: 'Link',
        title: 'Privacy policy',
        path: 'https://www.morenft.net/'
    },
    {
        type: 'Link',
        title: 'Cookie policy',
        path: 'https://www.morenft.net/'
    },
]

const linksCol2 = [
    {
        type: 'Link',
        title: 'About',
        path: '/'
    },
    {
        type: 'Link',
        title: 'Guides',
        path: '/docs-guides/welcome'
    },
]

const SocialBlocks = () => {
    return (
        <div className={styles.container__social__blocks}>
            <div className={` ${styles.social__block__item} ${styles.bg__dark__grey}`}><a href={'asdas'}><BsGithub/>Github</a>
            </div>
            <div className={` ${styles.social__block__item} ${styles.bg__grey}`}><SiDiscord/> Discord</div>
            <div className={` ${styles.social__block__item} ${styles.bg__grey__light}`}><BsTwitter/> Twitter</div>
        </div>
    )
}

const Footer = () => {

    return (
        <>
            <div className={styles.wrapper__footer}>
                <div className={styles.container}>

                    <div className={styles.footer__col1}>
                        <div className={styles.footer__col1__logo}>
                            <img src={useBaseUrl('/img/Logo_per_doc.svg')} alt="logo"/>
                        </div>
                        <div className={`${styles.footer__col1__text} ${styles.sm__pd}`}>
                            <p>The first Italian digital marketplace for crypto collectibles and non-fungible
                                tokens.</p>
                        </div>

                        <div className={styles.footer__col1__text}>
                            <p>The first Italian digital marketplace for crypto collectibles and non-fungible
                                tokens.</p>
                        </div>
                    </div>

                    <div className={styles.container__links}>
                        <div className={styles.footer__col2}>
                            <FooterCol
                                heading={'Docs'}
                                links={linksCol2}
                            />
                        </div>

                        <div className={styles.footer__col3}>
                            <FooterCol
                                heading={'Company'}
                                links={linksCol3}
                            />
                        </div>

                        <div className={styles.footer__col4}>
                            <FooterCol
                                heading={'Legal'}
                                links={linksCol4}
                            />
                        </div>
                    </div>

                </div>

                <div className={styles.copy}> {`Copyright © ${new Date().getFullYear()}`} made by Vitali Passaro
                    with &#128154; for MORE NFT DOCS. All Rights Reserved.
                </div>
            </div>

            <SocialBlocks/>
        </>

)
}

export default React.memo(Footer);
