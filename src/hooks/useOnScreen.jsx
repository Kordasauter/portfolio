import { useEffect, useMemo, useState } from 'react'

export default function useOnScreen(ref) {
	const [isIntersecting, setIntersecting] = useState(false)

	const callbackFunction = ([entry]) => setIntersecting(entry.isIntersecting)
	const options = {
		root: null,
		rootMargin: window.innerWidth < 1024 ? '-90px' : '-40px',
		threshold: 0.1,
	}

	const observer = useMemo(
		() => new IntersectionObserver(callbackFunction, options),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)

	useEffect(() => {
		observer.observe(ref.current)
		return () => observer.disconnect()
	}, [observer, ref])

	return isIntersecting
}
