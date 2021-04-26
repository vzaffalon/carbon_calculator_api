async function index(req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
      
        try {
          const item: Item = await ItemService.find(id);
      
          if (item) {
            return res.status(200).send(item);
          }
      
          res.status(404).send("item not found");
        } catch (e) {
          res.status(500).send(e.message);
        }
}


export {
    index
}