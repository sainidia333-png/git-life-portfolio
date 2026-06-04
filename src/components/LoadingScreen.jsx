export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0D1117] flex items-center justify-center">
      <div className="font-mono text-green-500 text-lg space-y-2">

        <p>$ booting career-repository...</p>

        <p>Loading commits...</p>

        <p>Loading projects...</p>

        <p>Loading achievements...</p>

        <p className="text-white">Ready.</p>

      </div>
    </div>
  );
}