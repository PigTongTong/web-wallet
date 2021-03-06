import * as types from './ActionTypes';

export const setLanguage = ( $language ) => ( {
	type: types.SET_LANGUAGE,
	language: $language,
} );

export const updateKeypair = ( $keypair, $resKey = null ) => ( {
	type: types.UPDATE_KEYPAIR,
	keypair: $keypair,
	resKey: $resKey,
} );

export const showSpinner = ( $isShow ) => ( {
	type: types.SHOW_SPINNER,
	isShow: $isShow,
} );

export const showKeyGenerator = ( $isShow ) => ( {
	type: types.SHOW_KEY_GENERATOR,
	isShow: $isShow,
} );

export const showGeneratorConfirm = ( $isShow ) => ( {
	type: types.SHOW_GENERATOR_CONFIRM,
	isShow: $isShow,
} );

export const showSetPassword = ( $isShow ) => ( {
	type: types.SHOW_SET_PASSWORD,
	isShow: $isShow,
} );

export const showRecordSeed = ( $isShow ) => ( {
	type: types.SHOW_RECORD_SEED,
	isShow: $isShow,
} );

export const showAuthUser = ( $isShow, $callback = null ) => ( {
	type: types.SHOW_AUTH_USER,
	isShow: $isShow,
	callback: $callback,
} );

export const recordSeedRedirect = ( $redirect ) => ( {
	type: types.RECORD_SEED_REDIRECT,
	redirect: $redirect,
} )

export const showCopyComplete = ( $isShow ) => ( {
	type: types.SHOW_COPY_COMPLETE,
	isShow: $isShow,
} );

export const showTimer = ( $isShow ) => ( {
	type: types.SHOW_TIMER,
	isShow: $isShow,
} );

export const postponeTimer = ( postpone ) => ( {
	type: types.POSTPONE_TIMER,
	postpone: postpone,
} );

export const showTransactionConfirm = ( $isShow, $paymentData ) => ( {
	type: types.SHOW_TRANSACTION_CONFIRM,
	isShow: $isShow,
	paymentData: $paymentData,
} );

export const showTransactionComplete = ( $isShow, $paymentData ) => ( {
	type: types.SHOW_TRANSACTION_COMPLETE,
	isShow: $isShow,
	paymentData: $paymentData,
} );

export const streamAccount = ( $account ) => ( {
	type: types.STREAM_ACCOUNT,
	account: $account,
} );

export const streamEffects = ( $effects ) => ( {
	type: types.STREAM_EFFECTS,
	effects: $effects,
} );

export const streamOffers = ( $offers ) => ( {
	type: types.STREAM_OFFERS,
	offers: $offers,
} );

export const streamPayment = ( $payment ) => ( {
	type: types.STREAM_PAYMENT,
	payment: $payment,
} );

export const streamOperations = ( $operations ) => ( {
  type: types.STREAM_OPERATIONS,
  operations: $operations,
} );

export const resetHistory = () => ( {
	type: types.RESET_HISTORY,
} );

export const setMaintenance = ( maintenanceData ) => ( {
	type: types.SET_MAINTENANCE,
	maintenanceData,
} );