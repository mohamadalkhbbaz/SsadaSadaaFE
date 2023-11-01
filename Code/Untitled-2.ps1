1	"Store Transfers"	"Transfer"
2	"Return Purchase"	"Out"
3	"Scrap"	"Out"
4	"Sales"	"Out"
5	"Return Sales"	"In"
6	"Purchase"	"In"
7	"Transfer - Fix Balance"	"IssueTransfer"
8	"Transfer - Fix Balance"	"ReceiveTransfer"
9	"Audit - Resolve Excess"	"AuditOut"
10	"Audit - Resolve Shortage"	"AuditIn"
11	"Return To Orginal"	"In"
12	"Return To Orginal"	"Out"
13	"Borrower"	"Borrow"3

Microsoft.EntityFrameworkCore.DbUpdateException
  HResult=0x80131500
  Message=An error occurred while updating the entries. See the inner exception for details.
  Source=Microsoft.EntityFrameworkCore.Relational
  StackTrace:
   at Microsoft.EntityFrameworkCore.Update.ReaderModificationCommandBatch.<ExecuteAsync>d__29.MoveNext()
   at Microsoft.EntityFrameworkCore.Update.Internal.BatchExecutor.<ExecuteAsync>d__8.MoveNext()
   at Microsoft.EntityFrameworkCore.Update.Internal.BatchExecutor.<ExecuteAsync>d__8.MoveNext()
   at Microsoft.EntityFrameworkCore.ChangeTracking.Internal.StateManager.<SaveChangesAsync>d__97.MoveNext()
   at Microsoft.EntityFrameworkCore.ChangeTracking.Internal.StateManager.<SaveChangesAsync>d__101.MoveNext()
   at Npgsql.EntityFrameworkCore.PostgreSQL.Storage.Internal.NpgsqlExecutionStrategy.<ExecuteAsync>d__7`2.MoveNext()
   at Microsoft.EntityFrameworkCore.DbContext.<SaveChangesAsync>d__54.MoveNext()
   at ContextLibrary.Repository`1.<SaveChangesAsync>d__19.MoveNext()
   at Inventory.Application.Services.OutTransactionService.<AddTransaction>d__20.MoveNext() in D:\Projects\inventory-full-backend\src\Inventory.Application\Services\OutTransactionService.cs:line 234

  This exception was originally thrown at this call stack:
    [External Code]

Inner Exception 1:
PostgresException: 23505: duplicate key value violates unique constraint "PK_InventoryLocation"




  public async Task<List<BalanceByCustody>> GetBalancesByBorrowerAndByLocation(int? borrowerId, int? locationId, int? itemID, List<int>? itemIds)
        {
            var balanceByCustodies = await _dbContext.BalanceByCustody
                            .Where(x =>
                            (!borrowerId.HasValue || x.BorrowerID == borrowerId) &&
                            (!locationId.HasValue || x.InLocationID == locationId) &&
                            (!itemID.HasValue || x.ItemID == itemID) &&
                            (itemIds == null || itemIds.Contains(x.ItemID)) &&
                            x.RemainingUomQuantinty > 0)
                            .Include(x => x.BalanceByCustodySerial)
                            .Include(x => x.Item)
                            .Include(x => x.InLocation)
                            .Include(x => x.StockUoM)
                            .ToListAsync();
            return balanceByCustodies;
        }