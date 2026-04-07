import LogoutButton from "@/components/LogoutButton";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-2xl font-semibold text-slate-900">
          환영합니다
        </h1>
        <p className="mt-2 text-slate-600">
          로그인에 성공했습니다. 이 페이지는 로그인한 사용자만 볼 수 있습니다.
        </p>
        <div className="mt-8">
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
