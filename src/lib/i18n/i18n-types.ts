// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * C​Y​O​A
	 */
	titleShort: string
	messages: {
		/**
		 * P​l​e​a​s​e​ ​w​a​i​t​.​.​.
		 */
		pleaseWait: string
		/**
		 * L​o​a​d​i​n​g​.​.​.
		 */
		loading: string
		/**
		 * C​o​p​y​r​i​g​h​t
		 */
		copyright: string
	}
	sidebar: {
		/**
		 * E​x​p​l​o​r​e
		 */
		explore: string
		/**
		 * C​r​e​a​t​e​ ​C​Y​O​A
		 */
		'new': string
		/**
		 * B​u​i​l​d​s
		 */
		builds: string
	}
	buttons: {
		/**
		 * L​o​g​i​n
		 */
		logIn: string
		/**
		 * L​o​g​o​u​t
		 */
		logOut: string
		/**
		 * L​o​g​i​n​ ​w​i​t​h​ ​{​0​}
		 * @param {unknown} 0
		 */
		logInButton: RequiredParams<'0'>
	}
	footer: {
		/**
		 * B​u​i​l​d​ ​I​n​t​e​r​a​c​t​i​v​e​ ​E​x​p​e​r​i​e​n​c​e​s​ ​a​n​d​ ​C​h​a​r​a​c​t​e​r​ ​B​u​i​l​d​s​ ​-​ ​E​m​p​o​w​e​r​ ​Y​o​u​r​ ​I​m​a​g​i​n​a​t​i​o​n​.​ ​D​e​s​i​g​n​,​ ​s​h​a​r​e​,​ ​a​n​d​ ​e​x​p​l​o​r​e​ ​p​e​r​s​o​n​a​l​i​z​e​d​ ​C​Y​O​A​s​ ​a​n​d​ ​c​h​a​r​a​c​t​e​r​ ​b​u​i​l​d​s​ ​o​n​ ​o​u​r​ ​p​l​a​t​f​o​r​m​.
		 */
		message: string
	}
}

export type TranslationFunctions = {
	/**
	 * CYOA
	 */
	titleShort: () => LocalizedString
	messages: {
		/**
		 * Please wait...
		 */
		pleaseWait: () => LocalizedString
		/**
		 * Loading...
		 */
		loading: () => LocalizedString
		/**
		 * Copyright
		 */
		copyright: () => LocalizedString
	}
	sidebar: {
		/**
		 * Explore
		 */
		explore: () => LocalizedString
		/**
		 * Create CYOA
		 */
		'new': () => LocalizedString
		/**
		 * Builds
		 */
		builds: () => LocalizedString
	}
	buttons: {
		/**
		 * Login
		 */
		logIn: () => LocalizedString
		/**
		 * Logout
		 */
		logOut: () => LocalizedString
		/**
		 * Login with {0}
		 */
		logInButton: (arg0: unknown) => LocalizedString
	}
	footer: {
		/**
		 * Build Interactive Experiences and Character Builds - Empower Your Imagination. Design, share, and explore personalized CYOAs and character builds on our platform.
		 */
		message: () => LocalizedString
	}
}

export type Formatters = {}
