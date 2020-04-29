import express from 'express';
import { create } from './accounts/create';
import { deposit } from './accounts/deposit';
import { debit } from './accounts/debit';
import { get } from './accounts/update';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const account = await create(req.body);

    res.json({ data: account });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});
  
router.get('/:id', async (req, res) => {
  try {
    const account = await get({id: req.params.id});

    res.json({data: account});
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.patch('/deposit', async (req, res) => {
  try {
    const account = await deposit(req.body);

    res.json({data: account});
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.patch('/debit', async (req, res) => {
  try {
    const account = await debit(req.body);

    res.json({data: account});
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

export default router;