

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.jpg';
declare module '*.png';

declare module 'components/Header/Header' {
    const Header: React.ComponentType;
    export default Header;
}

declare module 'components/Sections/Sections' {
    const Sections: React.ComponentType;
    export default Sections;
}

declare module 'components/Footer/Footer' {
    const Footer: React.ComponentType;
    export default Footer;
}
