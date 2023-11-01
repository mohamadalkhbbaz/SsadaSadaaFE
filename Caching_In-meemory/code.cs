

// Pros:
// Faster Data Access – When we’re accessing data from the cache, it will be very fast as no additional network communication is involved outside of the application.
// Highly Reliable – In-memory cache is considered highly reliable as it resides within the app server’s memory. The cache will work fine as long the application is running.
// Easy to Implement – Implementing an In-memory cache is very easy with a few simple steps without any additional infrastructure or third-party components and hence it is a good option for small to mid-scale apps.

// Cons:
// Sticky Session Overhead – For large-scale apps running on multiple application servers, there will be an overhead to maintain sticky sessions.
// Server Resource Consumption – If not properly configured, It may consume a lot of the app server’s resources, especially memory


private IMemoryCache _cache;


 if (_cache.TryGetValue(employeeListCacheKey, out IEnumerable<Employee> employees))
        {
            _logger.Log(LogLevel.Information, "Employee list found in cache.");
        }
        else
        {
            _logger.Log(LogLevel.Information, "Employee list not found in cache. Fetching from database.");
            employees = _dataRepository.GetAll();
            var cacheEntryOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromSeconds(60))
                    .SetAbsoluteExpiration(TimeSpan.FromSeconds(3600))
                    .SetPriority(CacheItemPriority.Normal)
                    .SetSize(1024);
            _cache.Set(employeeListCacheKey, employees, cacheEntryOptions);
        }


            _cache.Remove(employeeListCacheItem);


x

// نضع الكود في مكانين الاول عند التعديل على الصلاحيات والمكان الثاني عند مكان التحقق من الصلاحيات عند ضرب كل اند بوينت 
// Authorizetion handler , Role Service => assignPermissionToRole