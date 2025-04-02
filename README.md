# lib-kava-ai

Reusable UI components & utils for AI based projects.

---

## 📦 Installation

### 🔗 Local Development (with `npm link`)

Use this to work on `lib-kava-ai` and a consumer project (like `oros` or `hard-ai`) at the same time.

#### Step 1: Link the library globally

```bash
cd ../lib-kava-ai
npm link
```

#### Step 2: Link it in your consumer project

```bash
cd ../oros         # or ../hard-ai
npm link lib-kava-ai
```

This creates a symlink so changes to the library reflect immediately after building.

#### Step 3: Run build watch (optional, for live updates)

```bash
cd ../lib-kava-ai
npm run build:watch
```

note that watch command will not delete code that is removed from dist, it will also not add css files if those change or get added, running `npm run build` manually is required.

---

### 🔄 Unlink and revert to Git/NPM source

When you're done with local dev:

```bash
cd ../oros         # or ../hard-ai
npm unlink lib-kava-ai
npm install        # reinstalls the version from package.json
```

---

## 📥 Install via Git (for production or CI)

In your consumer project, you can point directly to a GitHub URL:

### Latest commit from default branch:

```bash
npm install github:Kava-Labs/lib-kava-ai
```

### Specific branch:

```bash
npm install github:Kava-Labs/lib-kava-ai#dev
```

### Specific commit:

```bash
npm install github:Kava-Labs/lib-kava-ai#9fdc3fa
```

### Specific tag:

```bash
npm install github:Kava-Labs/lib-kava-ai#v0.2.1
```

---

## ✅ Recommended Workflow

| Task                        | Command                                                  |
| --------------------------- | -------------------------------------------------------- |
| Local dev with live changes | `npm link` in lib, then in consumer                      |
| Switch back to prod source  | `npm unlink && npm install github:Kava-Labs/lib-kava-ai` |
| Use specific commit in prod | `npm install github:Kava-Labs/lib-kava-ai#commit`        |

---

## 🛠 Development

```bash
npm install          # install deps
npm run build        # build package
npm run build:watch  # auto rebuild on change
npm run test         # run unit tests
```

---

## 🧪 Testing

Uses Vitest + Testing Library.

```bash
npm run test
```

---

## 🧼 Clean Build

If publishing or committing built files:

```bash
npm run build
```

Make sure `dist/` includes compiled files and CSS modules if needed.
