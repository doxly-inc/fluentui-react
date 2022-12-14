import { Async } from '@fluentui/utilities';
import * as React from 'react';
import { useConst } from './useConst';
/**
 * Hook to provide an Async instance that is automatically cleaned up on dismount.
 */
export function useAsync() {
    var async = useConst(function () { return new Async(); });
    // Function that returns a function in order to dispose the async instance on unmount
    React.useEffect(function () { return function () { return async.dispose(); }; }, [async]);
    return async;
}
//# sourceMappingURL=useAsync.js.map