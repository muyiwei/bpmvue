module.exports = [
    {
      api: '/test',
      response1: (req, res) => {
        const data = {
          "index":"123123dddddddddddddd",
          "key":"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCf3XjtKg+N+65dYESzrYh9iUMua74f8vqIpvh0YcyxgUYtoELNsxgeth2NpDGxjHOJZbRSe46OmujijpiQF2G5NSam26WqQVMFzOPlDdTrn0KqFW2TGlm5smQCOqXvUNnUYpxfb1wMi4f0RHPGbF83dRD81WgingI66fP5UJ0cgwIDAQAB"}
          res.json(data);
      }
      
    }
]