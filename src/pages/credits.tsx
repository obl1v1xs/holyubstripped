import type { HolyPage } from '../App';
import { ObfuscatedThemeA } from '../ThemeElements';
import { Obfuscated } from '../obfuscate';
import { useTranslation } from 'react-i18next';

const Credits: HolyPage = () => {
	const { t } = useTranslation('credits');

	return (
		<main>
			<h2>{t('titles.credits')}</h2>
			<h4>{t('titles.development')}</h4>
			<ul>
				<li>
					<Obfuscated>
						sexyduceduce - {t('positions.frontendDev')}, Ultraviolet
					</Obfuscated>
				</li>
				<li>
					<Obfuscated>Device - {t('positions.frontendDev')}, Stomp</Obfuscated>
				</li>
				<li>
					<Obfuscated>OlyB - {t('positions.frontendDev')}, WebRetro</Obfuscated>
				</li>
				<li>
					<Obfuscated>luphoria - {t('positions.backendDev')}</Obfuscated>
				</li>
				<li>
					<Obfuscated>Ender - {t('positions.backendDev')}</Obfuscated>
				</li>
				<li>
					<Obfuscated>011011000110111101101100 - Rammerhead</Obfuscated>
				</li>
			</ul>

			<h2>
				<Obfuscated>{t('titles.proxyScripts')}</Obfuscated>
			</h2>

			<ul>
				<li>
					<Obfuscated>Rammerhead:</Obfuscated>{' '}
					<ObfuscatedThemeA href="https://github.com/binary-person/rammerhead">
						<Obfuscated>https://github.com/binary-person/rammerhead</Obfuscated>
					</ObfuscatedThemeA>
				</li>
				<li>
					<Obfuscated>Ultraviolet:</Obfuscated>{' '}
					<ObfuscatedThemeA href="https://github.com/titaniumnetwork-dev/Ultraviolet">
						<Obfuscated>
							https://github.com/titaniumnetwork-dev/Ultraviolet
						</Obfuscated>
					</ObfuscatedThemeA>
				</li>
				<li>
					<Obfuscated>Stomp:</Obfuscated>{' '}
					<ObfuscatedThemeA href="https://github.com/sysce/stomp">
						<Obfuscated>https://github.com/sysce/stomp</Obfuscated>
					</ObfuscatedThemeA>
				</li>
			</ul>
		</main>
	);
};

export default Credits;
