import 'vite/client';
declare interface ImportMeta {
  env: {
    MODE: 'development' | 'test' | 'release' | 'mock' | 'site';
  };
}
