import { Check, X, Minus } from 'lucide-react';

type Cell = 'yes' | 'no' | 'limited' | string;

const columns = ['Supasheet', 'Retool', 'Supabase Studio', 'NocoDB', 'Directus'] as const;

const rows: { feature: string; values: Cell[] }[] = [
  { feature: 'Open source',                                values: ['yes', 'no', 'yes', 'yes', 'yes'] },
  { feature: 'Self-hostable',                              values: ['yes', 'limited', 'yes', 'yes', 'yes'] },
  { feature: 'Auto-generated CRUD',                        values: ['yes', 'Manual', 'limited', 'yes', 'yes'] },
  { feature: 'Multiple data views (kanban, calendar…)',    values: ['yes', 'no', 'no', 'yes', 'limited'] },
  { feature: 'Built-in auth + MFA',                        values: ['yes', 'limited', 'Managed', 'limited', 'yes'] },
  { feature: 'RBAC enforced by DB (RLS)',                  values: ['yes', 'no', 'yes', 'App-layer', 'App-layer'] },
  { feature: 'Configurable dashboards',                    values: ['yes', 'yes', 'no', 'limited', 'limited'] },
  { feature: 'File storage UI',                            values: ['yes', 'Plugin', 'yes', 'no', 'yes'] },
  { feature: 'Audit logs',                                 values: ['yes', 'no', 'no', 'no', 'yes'] },
  { feature: 'No per-seat fees',                           values: ['yes', 'no', 'yes', 'yes', 'limited'] },
  { feature: 'You own the React code',                     values: ['yes', 'no', 'N/A', 'limited', 'limited'] },
];

function CellMark({ value }: { value: Cell }) {
  if (value === 'yes') {
    return <Check className="h-5 w-5 text-primary mx-auto" aria-label="Yes" />;
  }
  if (value === 'no') {
    return <X className="h-5 w-5 text-muted-foreground/50 mx-auto" aria-label="No" />;
  }
  if (value === 'limited') {
    return <Minus className="h-5 w-5 text-muted-foreground mx-auto" aria-label="Limited" />;
  }
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export function ComparisonSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              How Supasheet compares
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Other tools either lock you in, charge per seat, or stop short of a complete
              internal-ops stack. Supasheet ships everything, and you keep the code.
            </p>
          </div>
          <div className="rounded-xl border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left font-medium text-foreground p-4 min-w-[220px]">Feature</th>
                    {columns.map((col, idx) => (
                      <th
                        key={col}
                        className={`text-center font-medium p-4 min-w-[120px] ${
                          idx === 0 ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rIdx) => (
                    <tr key={row.feature} className={rIdx % 2 === 1 ? 'bg-muted/10' : ''}>
                      <td className="p-4 text-foreground">{row.feature}</td>
                      {row.values.map((v, vIdx) => (
                        <td
                          key={vIdx}
                          className={`p-4 text-center ${vIdx === 0 ? 'bg-primary/5' : ''}`}
                        >
                          <CellMark value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Comparison reflects publicly documented features at time of writing. Verify against current vendor docs for your use case.
          </p>
        </div>
      </div>
    </section>
  );
}
