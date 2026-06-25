import json
from pathlib import Path


source = Path("publications.json")
target = Path("publications-data.js")

publications = json.loads(source.read_text(encoding="utf-8"))
target.write_text(
    "// Generated from publications.json so the page also works when opened as file:// in Firefox.\n"
    f"window.PUBLICATIONS = {json.dumps(publications, ensure_ascii=True, indent=2)};\n",
    encoding="utf-8",
)

print(f"Wrote {target} from {source} ({len(publications)} publications).")
