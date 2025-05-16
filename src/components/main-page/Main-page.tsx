import LandingContent from '../landing-page/Landing-content.tsx';
import { mediaItems } from '../../utils/media-data.tsx';
import MediaBanner from '../custom-components/Media-banner.tsx';

export default function MainPage () {

    return (
        <>
            <MediaBanner items={mediaItems} />
            <LandingContent />
        </>
    );
}
