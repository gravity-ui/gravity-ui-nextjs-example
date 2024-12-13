'use client';

import React from 'react';

import {Ghost} from '@gravity-ui/icons';
import {AsideHeader} from '@gravity-ui/navigation';

import {Wrapper} from '../Wrapper';

interface AppProps {
    children: React.ReactNode;
}
export const App: React.FC<AppProps> = ({children}) => {
    return (
        <AsideHeader
            logo={{icon: Ghost, text: 'nextjs-example'}}
            compact={true}
            hideCollapseButton={true}
            renderContent={() => <Wrapper>{children}</Wrapper>}
        />
    );
};
