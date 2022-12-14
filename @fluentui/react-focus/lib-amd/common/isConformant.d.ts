import { IsConformantOptions } from '@fluentui/react-conformance';
export declare function isConformant<TProps = {}>(testInfo: Omit<IsConformantOptions<TProps>, 'componentPath'> & {
    componentPath?: string;
}): void;
