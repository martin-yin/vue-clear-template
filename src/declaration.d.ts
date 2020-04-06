
declare module 'vue-page-stack';

type RouterMode = 'hash' | 'history' | 'abstract';

interface Window {
    $sentry: AnyObject;
    $appVersion: string | undefined;
    $systemVersion: string | undefined;
}

interface AnyObject {
    [propName: string]: any;
}
