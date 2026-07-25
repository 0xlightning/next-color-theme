export interface ConnectedAccount {
  provider: string;
  email: string;
  connectedAt: string;
}

export interface ActiveSession {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
}

export interface AccountAccessData {
  email: string;
  twoFactorEnabled: boolean;
  connectedAccounts: ConnectedAccount[];
  activeSessions: ActiveSession[];
}

export const mockData: AccountAccessData = {
  email: "user@example.com",
  twoFactorEnabled: true,
  connectedAccounts: [
    { provider: "google", email: "user@gmail.com", connectedAt: "2024-01-15" },
    { provider: "github", email: "user@github.com", connectedAt: "2024-03-20" },
  ],
  activeSessions: [
    { id: "sess_1", device: "Chrome on macOS", location: "New York, USA", lastActive: "2024-07-23T10:00:00Z", isCurrent: true },
    { id: "sess_2", device: "Safari on iPhone", location: "Boston, USA", lastActive: "2024-07-22T18:30:00Z", isCurrent: false },
  ],
};
