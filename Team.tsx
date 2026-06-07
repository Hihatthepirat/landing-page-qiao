import { Mail, ExternalLink } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Avatar } from "@/components/ui/Avatar";
import { Wordmark } from "@/components/ui/Wordmark";
import { DemoButton } from "@/components/ui/DemoButton";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_EMAIL, REPO_URL } from "@/lib/config";

const TEAM = [
  {
    name: "Hirad",
    initials: "H",
    hex: "#a3673a",
    role: "Product & Engineering",
    line: "Built the reconciliation engine and the Qiáo app.",
  },
  {
    name: "Alex",
    initials: "A",
    hex: "#cf6326",
    role: "Clinical Data & Research",
    line: "Curated and adversarially audited the sourced interaction dataset.",
  },
  {
    name: "Kshitij",
    initials: "K",
    hex: "#6f4327",
    role: "Engineering & Design",
    line: "Built the app experience and this pitch.",
  },
];

/** Section 8 — Team + Ask (Beat 7). */
export function Team() {
  return (
    <SectionShell id="team">
      <Reveal>
        <SectionHeading eyebrow="Team" title="Team Qiáo." />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.06}>
            <GlassCard className="flex h-full flex-col items-start gap-4 p-6">
              <Avatar initials={m.initials} hex={m.hex} />
              <div>
                <p className="font-serif text-lg font-bold tracking-tight text-ink-900">
                  {m.name}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {m.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{m.line}</p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.05}>
        <GlassCard
          strong
          className="mt-8 flex flex-col items-start gap-5 p-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-base leading-relaxed text-ink-700">
            We're joining the HK delegation to pilot Qiáo with HKSTP's biomed cluster and
            integrated-care clinics.{" "}
            <span className="font-semibold text-ink-900">Talk to us.</span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <DemoButton />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/80 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-800 backdrop-blur-md transition-colors hover:bg-white/90"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Contact
            </a>
          </div>
        </GlassCard>
      </Reveal>

      <footer className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/50 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
        <Wordmark sizeClass="text-sm" />
        <p>Built during EuroTeQ × HKTE Hackathon, June 2026.</p>
        <div className="flex items-center gap-4">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink-700"
          >
            Repository
            <ExternalLink className="h-3 w-3" aria-hidden />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors hover:text-ink-700"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </SectionShell>
  );
}
