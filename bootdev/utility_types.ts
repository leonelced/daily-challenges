export type UserProfile = {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  email: string;
  passwordHash: string;
  isAdmin: boolean;
};

type PublicFields = Pick<
  UserProfile,
  "id" | "username" | "displayName" | "bio"
>;

export type PublicProfile = Readonly<PublicFields>;

type EditablePublicFields = Omit<PublicFields, "id" | "username">;

export type ProfileUpdate = Partial<EditablePublicFields>;

// My Solution:

export function applyProfileUpdate(
  profile: UserProfile,
  update: ProfileUpdate,
): PublicProfile {
  return {
    id: profile.id,
    username: profile.username,
    displayName: update.displayName ?? profile.displayName,
    bio: update.bio ?? profile.bio,
  }
}

// https://www.boot.dev/challenges/0c949ffa-629c-41c3-93dd-5f210523d48d