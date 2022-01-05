import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  rollup: {
    emitCJS: true
  },
  externals: ['vue'],
  entries: [
    {
      input: 'src/index.ts',
      outDir: 'dist',
      name: 'index',
      format: 'esm',
      ext: 'mjs'
    },
    {
      input: 'src/index.ts',
      outDir: 'dist',
      name: 'index',
      format: 'cjs',
      ext: 'cjs'
    }
  ]
})
