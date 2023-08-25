```mermaid
erDiagram
	ColorScheme {
		value System
		value Dark
		value Light
	}
	Role {
		value User
		value Administrator
	}
	User {
		String id PK  "dbgenerated(gen_random_uuid())"
		DateTime createdAt  "now()"
		DateTime updatedAt
		String name  "nullable"
		String email  "nullable"
		DateTime emailVerified  "nullable"
		String image  "nullable"
		Boolean banned
		Role role "User"
	}
	UserSettings {
		String id PK  "dbgenerated(gen_random_uuid())"
		ColorScheme colorScheme "System"
		String userId FK
		String localeId FK
	}
	Locale {
		String id
		String languageCode
		String countryCode  "nullable"
		String script  "nullable"
		String formalName
		String nativeName
		String commonName  "nullable"
	}
	Account {
		String id PK  "dbgenerated(gen_random_uuid())"
		String type
		String provider
		String providerAccountId
		String refreshToken  "nullable"
		String accessToken  "nullable"
		Int expiresAt  "nullable"
		String tokenType  "nullable"
		String scope  "nullable"
		String idToken  "nullable"
		String sessionState  "nullable"
		String userId FK
	}
	Session {
		String id PK  "dbgenerated(gen_random_uuid())"
		String sessionToken
		DateTime expires
		String userId FK
	}
	VerificationToken {
		String identifier
		String token
		DateTime expires
	}
	User }|--|{ UserSettings : settings
	User }o--|| Role : "enum:role"
	UserSettings }|--|{ User : user
	UserSettings }o--|| Locale : locale
	UserSettings }o--|| ColorScheme : "enum:colorScheme"
	Account }o--|| User : user
	Session }o--|| User : user

```
