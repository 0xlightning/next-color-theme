import {
  ContactInformation,
  AccountAccess,
  Notifications
} from '@/components/widgets';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Settings</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">Manage your account settings and preferences.</p>
      </div>
      
      <div className="flex flex-col gap-8 max-w-4xl">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100 border-b pb-2 dark:border-zinc-800">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactInformation />
            <AccountAccess />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100 border-b pb-2 dark:border-zinc-800">Preferences & Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Notifications />
            
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 flex flex-col justify-center items-center text-center">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50 mb-2">Theme Preferences</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Toggle between light and dark mode appearance.</p>
              <button className="h-10 px-4 rounded-md bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors font-medium text-sm">
                Toggle Theme
              </button>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
