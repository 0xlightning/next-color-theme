import os
SRC_ROOT = "../shadcn-extraction/apps/v4/components"
SRC_CARDS = "../shadcn-extraction/apps/v4/components/cards"
DST = "src/components/create"

src = set(os.listdir(SRC_ROOT)) | set(os.listdir(SRC_CARDS))
dst = set(os.listdir(DST))
to_skip = dst & src
count = 0
for f in sorted(to_skip):
    p = os.path.join(DST, f)
    with open(p, "r", encoding="utf-8") as fh:
        content = fh.read()
    if content.lstrip().startswith("/* eslint-disable") and "// @ts-nocheck" not in content[:200]:
        body = content.split("*/\n", 1)[1]
        new = "// @ts-nocheck\n/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect, @typescript-eslint/no-empty-object-type */\n" + body
        with open(p, "w", encoding="utf-8") as fh:
            fh.write(new)
        count += 1
print(f"Updated {count} files")
