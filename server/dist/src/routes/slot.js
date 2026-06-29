import { Router } from 'express';
import { createSlot, getSlots, updateSlot, deleteSlot, getActiveSlot, setActiveSlot } from '../controllers/slotController.js';
import { authCheck } from '../middleware/authCheck.js';
const router = Router();
router.get('/active', authCheck, getActiveSlot);
router.post('/active', authCheck, setActiveSlot);
router.post('/', authCheck, createSlot);
router.get('/', authCheck, getSlots);
router.put('/:id', authCheck, updateSlot);
router.delete('/:id', authCheck, deleteSlot);
export default router;
//# sourceMappingURL=slot.js.map