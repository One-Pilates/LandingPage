/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SITE_URL?: string;
	readonly VITE_WHATSAPP_NUMBER?: string;
	readonly VITE_WHATSAPP_MESSAGE?: string;
	readonly VITE_EMAIL?: string;
	readonly VITE_PHONE?: string;
	readonly VITE_ADDRESS?: string;
	readonly VITE_EMAILJS_SERVICE_ID?: string;
	readonly VITE_EMAILJS_TEMPLATE_ID?: string;
	readonly VITE_EMAILJS_PUBLIC_KEY?: string;
	readonly VITE_EMAILJS_TO_EMAIL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
