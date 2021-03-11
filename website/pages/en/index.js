/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const {siteConfig, language = ''} = this.props;
        const {baseUrl, docsUrl} = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = (props) => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = (props) => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo"/>
            </div>
        );

        const ProjectTitle = (props) => (
            <h2 className="projectTitle">
                {props.title}
                <small>{props.tagline}</small>
            </h2>
        );

        const PromoSection = (props) => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = (props) => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <Logo img_src={`${baseUrl}img/undraw_location_review_dmxd.svg`}/>
                <div className="inner">
                    <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title}/>
                    <PromoSection>
                        <Button href={docUrl('doc3.html')}>Manual do Cliente</Button>
                        <Button href={docUrl('doc2.html')}>Manual do Corretor</Button>
                        <Button href={docUrl('doc1.html')}>Manual do BackOffice</Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const {config: siteConfig, language = ''} = this.props;
        const {baseUrl} = siteConfig;

        const Block = (props) => (
            <Container
                padding={['bottom', 'top']}
                id={props.id}
                background={props.background}>
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const Features = () => (
            <Block layout="fourColumn">
                {[
                    {
                        // content: 'This is the content of my feature',
                        image: `${baseUrl}img/undraw_sync4_xlc6.svg`,
                        imageAlign: 'top',
                        title: "<a href='https://apps.apple.com/br/app/saleme-rentme/id1543446648?l=en' target='_blank'>Download para IOS</a>",
                    },
                    {
                        // content: 'The content of my second feature',
                        image: `${baseUrl}img/undraw_android_jr64.svg`,
                        imageAlign: 'top',
                        title: "<a href='https://apps.apple.com/br/app/saleme-rentme/id1543446648?l=en' target='_blank'>Download para Android</a>",
                    },
                    {
                        // content: 'The content of my second feature',
                        image: `${baseUrl}img/undraw_monitor.svg`,
                        imageAlign: 'top',
                        title: "<a href='http://saleme-rentme.com.br/login' target='_blank'>Painel para BackOffice</a>",
                    },
                ]}
            </Block>
        );

        const Showcase = () => {
            if ((siteConfig.users || []).length === 0) {
                return null;
            }

            const showcase = siteConfig.users
                .filter((user) => user.pinned)
                .map((user) => (
                    <a href={user.infoLink} key={user.infoLink}>
                        <img src={user.image} alt={user.caption} title={user.caption}/>
                    </a>
                ));

            const pageUrl = (page) =>
                baseUrl + (language ? `${language}/` : '') + page;

            return (
                <div className="productShowcaseSection paddingBottom" background="dark">
                    <h2>Quem somos nós?</h2>
                    <div className="logos">{showcase}</div>
                    <div className="more-users">
                        <a className="button" href="http://saleme-rentme.com.br/">
                            Mais sobre a JFleury
                        </a>
                    </div>
                </div>
            );
        };

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language}/>
                <div className="mainContainer">
                    <Features/>
                    <Showcase/>
                </div>
            </div>
        );
    }
}

module.exports = Index;
