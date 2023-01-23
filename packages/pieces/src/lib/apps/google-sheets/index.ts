import {createPiece} from '../../framework/piece';
import { newRowAdded } from './triggers/new-row-added';

export const googleSheets = createPiece({
	name: 'google_sheets',
	logoUrl: 'https://cdn.activepieces.com/pieces/google_sheets.png',
	actions: [],
    displayName:"Google Sheets",
	triggers: [newRowAdded],
});