Minimal Rspack scaffold that runs a dev server with `ts-node` and a persistent cache. Demonstrates a bug in Rspack file cache resolver.

```bash
# Install dependencies
pnpm install

# Start dev server demonstrating the issue
pnpm start
```

Warning/bug:

```bash
LOG from rspack.persistentCache
<w> BuildDependencies: can't resolve @/rspack/mode in /Users/mjames/work/rspack-loader-chain.
<w> - NotFound("@/rspack/mode")
```
