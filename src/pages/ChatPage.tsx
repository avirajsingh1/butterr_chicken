import Layout from "@/components/layout/Layout";

const ANAM_FRAME_URL = "https://lab.anam.ai/frame/1l71MZeP6pYr4qjSt8l_6";

export default function ChatPage() {
  return (
    <Layout>
      <div className="container flex flex-col" style={{ height: "calc(100vh - 8rem)" }}>
        {/* Header */}
        <div className="flex items-center justify-between border-b py-4">
          <div>
            <h1 className="font-display text-2xl font-bold">Ask Anna</h1>
            <p className="text-sm text-muted-foreground">Your AI-powered city assistant — speak or type</p>
          </div>
        </div>

        {/* Anam Embed */}
        <div className="flex-1 py-4">
          <iframe
            src={ANAM_FRAME_URL}
            className="h-full w-full rounded-xl border-0 shadow-lg"
            allow="microphone"
            title="Anna — Rheinstadt City Assistant"
          />
        </div>
      </div>
    </Layout>
  );
}
