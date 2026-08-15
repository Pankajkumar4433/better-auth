import io

p = "components/landing/staggered-nav-files.tsx"
src = io.open(p, encoding="utf-8").read()
lines = src.split("\n")

idx_start = None
for i, ln in enumerate(lines):
    if ln.strip() == "{section.children.map((item) => (":
        idx_start = i
        break
assert idx_start is not None, "start line not found"

idx_end = idx_start + 20
assert lines[idx_end].strip() == "))}", repr(lines[idx_end])

N = lambda n: "\t" * n
new_block = [
    N(16) + "{section.children.map((item) =>",
    N(17) + "item.comingSoon ? (",
    N(18) + "<div",
    N(19) + "key={item.name}",
    N(19) + "className={cn(",
    N(20) + '"flex items-center gap-2.5 pl-9 pr-5 py-2.5 font-mono text-sm uppercase tracking-wider",',
    N(20) + '"text-foreground/40 dark:text-foreground/30 cursor-default select-none",',
    N(19) + ")}",
    N(18) + ">",
    N(19) + "{item.name}",
    N(18) + "</div>",
    N(17) + ") : (",
    N(18) + "<Link",
    N(19) + "key={item.name}",
    N(19) + "href={item.href}",
    N(19) + "target={",
    N(20) + 'item.external ? "_blank" : undefined',
    N(19) + "}",
    N(19) + "rel={",
    N(20) + 'item.external ? "noreferrer" : undefined',
    N(19) + "}",
    N(19) + "onClick={() => setMobileMenuOpen(false)}",
    N(19) + "className={cn(",
    N(20) + '"flex items-center gap-2.5 pl-9 pr-5 py-2.5 transition-colors font-mono text-sm uppercase tracking-wider",',
    N(20) + "isActivePrefix(item.path || item.href)",
    N(21) + '? "text-foreground bg-foreground/4"',
    N(21) + ': "text-foreground/60 dark:text-foreground/45 hover:text-foreground hover:bg-foreground/3",',
    N(19) + ")}",
    N(18) + ">",
    N(19) + "{item.name}",
    N(18) + "</Link>",
    N(17) + "),",
    N(16) + ")}",
]

lines[idx_start : idx_end + 1] = new_block
io.open(p, "w", encoding="utf-8", newline="\n").write("\n".join(lines))
print("replaced OK at line", idx_start + 1)