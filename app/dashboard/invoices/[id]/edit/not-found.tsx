import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex h-full flex-col items-center justify-center gap-2">
			<FaceFrownIcon className="w-10 text-slate-900" />
			<h1 className="text-lg font-semibold">404 Not Found</h1>
			<p className="text-slate-900">
				Could not find the requested invoice.
			</p>
			<Link
				href="/dashboard/invoices"
				className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
			>
				Go Back
			</Link>
		</main>
	);
}
