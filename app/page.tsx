import { ModeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-10 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Theme Testing Page</h1>
          <ModeToggle />
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-3xl font-semibold">Typography</h2>
            <p className="text-lg">This is regular text using the foreground color.</p>
            <p className="text-muted-foreground">
              This is muted text preview with reduced emphasis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-3xl font-semibold">Buttons</h2>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Primary Button
              </button>
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Secondary Button
              </button>
              <button className="bg-destructive text-destructive-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Destructive Button
              </button>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-3xl font-semibold">Cards & Containers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card text-card-foreground border border-border p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Card Preview</h3>
                <p className="text-muted-foreground">
                  This is a card component with border and shadow.
                </p>
              </div>

              <div className="bg-popover text-popover-foreground border border-border p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Popover Style</h3>
                <p className="text-muted-foreground">This uses popover background colors.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-3xl font-semibold">Accent & Muted</h2>
            <div className="bg-accent text-accent-foreground p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Accent Block</h3>
              <p>This section uses accent colors for highlighting.</p>
            </div>
            <div className="bg-muted text-muted-foreground p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Muted Block</h3>
              <p>This section uses muted colors for less emphasis.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-3xl font-semibold">Form Elements</h2>
            <div className="space-y-4 max-w-md">
              <input
                type="text"
                placeholder="Input field"
                className="w-full bg-input border border-border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <textarea
                placeholder="Textarea field"
                rows={3}
                className="w-full bg-input border border-border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-3xl font-semibold">Chart Colors</h2>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-chart-1 text-white px-6 py-4 rounded-lg">Chart 1</div>
              <div className="bg-chart-2 text-white px-6 py-4 rounded-lg">Chart 2</div>
              <div className="bg-chart-3 text-white px-6 py-4 rounded-lg">Chart 3</div>
              <div className="bg-chart-4 text-white px-6 py-4 rounded-lg">Chart 4</div>
              <div className="bg-chart-5 text-white px-6 py-4 rounded-lg">Chart 5</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
